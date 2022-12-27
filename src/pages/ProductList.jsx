import styled from "styled-components";
import Navbar from "../components/Navbar";
import React from 'react';
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <FilterContainer>
                <Filter>
                    <FilterText>Bộ lọc:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Thể loại
                        </Option>
                        <Option>Sách thiếu nhi</Option>
                        <Option>Tiểu thuyết</Option>
                        <Option>Sách giáo khoa</Option>
                        <Option>Sách tham khảo</Option>
                        <Option>Truyện cổ tích</Option>
                        <Option>Truyện tranh</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Trạng thái
                        </Option>
                        <Option>Bán chạy nhất</Option>
                        <Option>Mới nhất</Option>
                        <Option>Tìm kiếm nhiều nhất</Option>
                        <Option>Đánh giá tót nhất</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sắp xếp theo giá sản phẩm:</FilterText>
                    <Select>
                        <Option selected>Từ thấp đến cao</Option>
                        <Option>Từ cao đến thấp</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    );
};

export default ProductList;