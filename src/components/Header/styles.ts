import styled from 'styled-components'

interface SidebarProps {
	isOpen: boolean
}

export const HeaderContainer = styled.header`
	display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    background: #0B4936;

    /* width: 100vh; */
    /* height: 33.75rem; */

    padding: 25px 60px 16px;
    border-radius: 0 0 40px 40px;

	.logo img {
        width: 15rem;
        height: auto;
    }

    @media (max-width: 1090px) {
        padding: 25px 40px 16px;
    }

    @media (max-width: 500px) {
        .logo img {
            width: 10rem;
        }
    }
`

export const NavigateBar = styled.div`
	width: 100%;
	display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1090px) {
        flex-direction: column;
    }

    @media (max-width: 760px) {
        flex-direction: row;
    }
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 3.8rem;

  a {
        font: 900 1.7rem "Exo 2", serif;
        color: #FFF;
        text-decoration: none;
        position: relative;

        &:hover {
            color: #FDFBE2;
        }

        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            left: 0;
            bottom: -6px;
            background: #FDFBE2;
            transition: width 0.3s ease;
        }

        &:hover:after {
            width: 100%;
        }

    }

    @media (max-width: 1090px) {
        margin-top: 30px;
        width: 100%;
        justify-content: space-between;
    }

    @media (max-width: 760px) {
        display: none;
    }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 761px) {
    display: none;
  }
`

export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 761px) {
    display: none;
  }
`

export const SidebarLink = styled.a`
  color: white;
  padding: 1rem 0;
  text-decoration: none;
  border-bottom: 1px solid #555;

  &:hover {
    background-color: #555;
  }
`

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2.5rem;

	.content {
        width: 45%;
        height: auto;

        p {
            font: 900 1.2rem "Poppins", serif;
            color: #FFF;

            span {
                color: #FDFBE2;
            }
        }
    }

    @media (max-width: 915px) {
        align-items: flex-start;

        .logo {
            margin: 0 2rem;
            width: 8rem;
            img {
                width: 100%;
                height: auto;
            }
        }

        .content {
            flex-grow: 1;
        }
    }

    @media (max-width: 760px) {
        align-items: flex-start;

        .logo {
            display: none;
        }

        .content {
            p {
                font-size: 1rem;
            }
        }
    }
`
