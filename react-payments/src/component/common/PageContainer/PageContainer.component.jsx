import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 850px;
  border: 1px solid ${({ theme }) => theme.colors.pageDefault};
  padding: 20px 15px;
  gap: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid rgba(0, 0, 0, 0.18);
    border-left: 0;
    border-right: 0;
    background-color: ${({ theme }) => theme.colors.scroll};
  }
`;

export default PageContainer;
