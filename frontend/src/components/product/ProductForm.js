import styled from 'styled-components'
import Button from '../common/Button'
import Responsive from '../common/Responsive'
import palette from '../../lib/style/palette'
import { useEffect, useState } from 'react'
import { registerFile } from '../../modules/product';
import axios from 'axios'
import { useDispatch } from 'react-redux'

const ProductFormBlock = styled(Responsive)`
    margin-top: 3rem;

`
const ProductLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`

const ProductRegisterForm = styled.form`
    border: 1px;

`
const StyledDiv = styled.div`
    margin-top: 1rem;
    width: 100%;
   
`

const StyledInput = styled.input`
   ${props => props.type === "number" && `
        height:30px;
        width:34.5%;
        margin-right:0.5rem;
   `}
   ${props => props.type === "text" && `
        height:30px;
        width:73.5%;
   `}

`
const StyledTextArea = styled.textarea`
    resize: none;
    display: flex;
`

const StyledSelect = styled.select`
        width:72.5%;
        height:30px;

`
const StyledLabel = styled.label`
    margin-right: 0.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    width: 30%;
`
// - 상품명
// - 단가
// - 수량
// - 카테고리
// - 평점
// - 설명

const ProductForm = ({ form, onChangeField }) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const [uploadImg, setUploadImg] = useState(null);

    const onChangeFile = e => {
        setContent(e.target.files[0]);
    }
    const onRemoveFile = e => {
        setUploadImg(null);
        setContent(null);
    }
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', content);
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        await axios.post('/api/product/registerFile', formData, config)
            .then(result => {
                setUploadImg(result.data.filePath);
                dispatch(registerFile(result.data.filePath));
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <ProductFormBlock>
            <ProductLabel><h3>상품 등록</h3></ProductLabel>
            <ProductRegisterForm>
                <StyledDiv>
                    <StyledLabel>카테고리:</StyledLabel>
                    <StyledSelect name="productCategory" value={form.productCategory} onChange={onChangeField}>
                        <option value="default">--none--</option>
                        <option value="top">상의</option>
                        <option value="bottom">하의</option>
                        <option value="shoes">신발</option>
                    </StyledSelect>
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>상품명:</StyledLabel>
                    <StyledInput type='text' name="productName" value={form.productName} onChange={onChangeField} placeholder="상품명을 입력하세요"></StyledInput>
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>단가:</StyledLabel>
                    <StyledInput type="number" name="productPrice" min="0" step="1000" onChange={onChangeField}></StyledInput>

                    <StyledLabel>수량:</StyledLabel>
                    <StyledInput type="number" name="productAmount" min="0" onChange={onChangeField}></StyledInput>
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel >상품소개:</StyledLabel>
                    <StyledTextArea rows="20" cols="100" name="productDescription" value={form.productDescription} onChange={onChangeField} placeholder="상품소개를 입력하세요"></StyledTextArea>
                </StyledDiv>
            </ProductRegisterForm>
            <StyledDiv>
                <form encType="multipart/form-data" onSubmit={onSubmit}>
                    <StyledLabel>상품 이미지:</StyledLabel>
                    {uploadImg && (<>
                        <div>
                            <img src={uploadImg} alt="이미지" width="500"></img>
                            <input type="hidden" name="productFile" value={form.productFile} onChange={onChangeField} ></input>
                        </div>
                    </>)}
                    <StyledInput type="file" name="img" accept="image/*" onChange={onChangeFile}></StyledInput>
                    <Button space cyan>등록</Button>
                    <Button onClick={onRemoveFile}>삭제</Button>
                </form>
            </StyledDiv>

        </ProductFormBlock >
    );
};

export default ProductForm;
