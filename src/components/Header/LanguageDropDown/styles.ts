import styled from 'styled-components'

interface DropdownContentProps {
	show: boolean
}

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownButton = styled.button`
  /* color: #FFF; */
  /* font-size: 1.2rem; */
  border: none;
  cursor: pointer;
  background: none;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* gap: 1rem; */

  img {
    width: 3rem;
    height: auto;
  }
`

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  right: 0;

  @media (max-width: 760px) {
  left: 0;
  }
`

export const DropdownItem = styled.div`
  cursor: pointer;
  color: black;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    width: 30%;
    height: auto
  }

  &:hover {
    background-color: #f1f1f1;
  }
`
