import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputComponent from '../InputComponent/InputComponent'

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton,
        backgroundColorInput = "#fff",
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff' }
        = props
    return (
        <div style={{ display: 'flex'}}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                variant="borderless"
                style={{ backgroundColor: backgroundColorInput}} 
            />
            <ButtonComponent
                size={size}
                style={{ backgroundColor: backgroundColorButton, border: 'none' }}
                icon={<SearchOutlined style={{ color: colorButton }}/>}
                textButton={textButton}
                styleTextButton= {{ color: colorButton }}
            />
        </div>
    )
}

export default ButtonInputSearch
