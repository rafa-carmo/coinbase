import Image from 'next/image'
import { useState } from 'react'
import { navItems } from 'static/navItems'

import * as S from './styles'

export type SidebarProps = {}

const Sidebar = ({}: SidebarProps) => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <S.Logo>
          <Image
            width={300}
            height={80}
            src="/assets/cb-logo.png"
            alt="Coinbase Dashboard Logo"
          />
        </S.Logo>
      </S.LogoContainer>

      <S.NavItemsContainer>
        {navItems.map((item, index) => (
          <S.NavItem
            key={`${item.title}-${index}`}
            onClick={() => setActiveIcon(item.title)}
          >
            <S.NavIcon active={activeIcon === item.title}>
              {item.icon}
            </S.NavIcon>
            <S.NavTitle>{item.title}</S.NavTitle>
          </S.NavItem>
        ))}
      </S.NavItemsContainer>
    </S.Wrapper>
  )
}

export default Sidebar
