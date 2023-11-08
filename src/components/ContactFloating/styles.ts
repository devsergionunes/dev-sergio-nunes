import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  padding: 0 4rem;
  background-color: transparent;
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
`;

export const Contet = styled.div`
  width: 40px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ListSocialMedia = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ItemSocialMedia = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkSocialMedia = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: #a8b2d1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: #64ffda;
    }
  }
`;
