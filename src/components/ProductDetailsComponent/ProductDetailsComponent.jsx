import React from 'react'
import { Col, Row, Image } from 'antd'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imgsmall.webp'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'

const ProductDetailsComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', backgroundColor: '#fff' }}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px', borderRadius: '4px'}}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px'}}>
                <WrapperStyleNameProduct>Áo Thun Teelab Local Brand Unisex Holiday special " Hot Post" Tshirt TS240</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'green' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'green' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'green' }} />
                    <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>22 ngõ 12 Phạm Văn Đồng, Xuân Đỉnh, Hà Nội </span> -
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{ margin: '10px 0 20px', padding:'10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '10px'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <ButtonComponent
                    border={false}
                        size={40}
                        style={{ 
                            backgroundColor: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff',fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <ButtonComponent
                        size={40}
                        style={{ 
                            backgroundColor: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent
