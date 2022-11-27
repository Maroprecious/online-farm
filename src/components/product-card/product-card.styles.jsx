import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 93%;
  margin: 0 auto;
  height: auto;
  font-family: "Sora", sans-serif;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  cursor: pointer;
  position: relative;
`;
export const ProductOne = styled.div`
  font-family: "Sora", sans-serif;
  position: relative;
  height: 24rem;
`;
export const ProductTag = styled.div`
  z-index: 2;
  width: 4rem;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 2%;
  background-color: rgb(85, 219, 85);
`;
export const BestSeller = styled.p`
  color: #010101;
  letter-spacing: 0.4px;
  position: absolute;
  top: -5%;
  right: 18%;
  z-index: 2;
  font-size: 0.75rem;
  font-weight: 600;
`;
export const ProductName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #010101;
`;
export const Currency = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
`;
export const AddButton = styled.button`
  border: none;
  width: 12rem;
  height: 2.5rem;
  background-color: #fff;
  color: #c06240;
  font-weight: 600;
  outline: 2px solid #c06240;
  margin-top: 2rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 1s transform ease-in-out;

  &:hover {
    background-color: #c06240;
    color: #fff;
  }
`;
export const Heart = styled.div`
background-color: rgb(0, 0, 0, 0.543);
display: flex;
justify-content: center;
align-items: center;

border-radius: 0 0 1rem 0;
z-index: 2;
position: absolute;
top: -25%;
width: 3rem;
height: 3rem;
right: 49rem;
cursor: pointer;
`;
