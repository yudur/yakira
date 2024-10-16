import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderContainer, HeaderContent, MenuButton, NavLinks, NavigateBar, Sidebar, SidebarLink } from './styles'

import { LanguageDropDown } from './LanguageDropDown'

import yakiraNameIcon from '../../global/assets/icons/yakira-name.svg'
import yakiraCycleIcon from '../../global/assets/icons/Yakira-cycle.svg'

export function Header() {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<HeaderContainer>
				<NavigateBar>
					<div className="logo">
						<img src={yakiraNameIcon} alt="yakira" />
					</div>

					<NavLinks>
						<a href="#whoWeAre">{t('home.nav.whoWeAre')}</a>
						<a href="#project">{t('home.nav.project')}</a>
						<a href="#contact">{t('home.nav.contact')}</a>
						<LanguageDropDown />
					</NavLinks>

					<MenuButton onClick={() => setIsOpen(!isOpen)}>&#9776;</MenuButton>
				</NavigateBar>

				<HeaderContent id="whoWeAre">
					<div className="logo">
						<img src={yakiraCycleIcon} alt="yakira" />
					</div>

					<div className="content">
						<p>
							{t('home.sections.whoWeAre.init')} <span>Yakira</span> {t('home.sections.whoWeAre.final')}
						</p>
					</div>
				</HeaderContent>

				<Sidebar isOpen={isOpen}>
					<SidebarLink href="#whoWeAre" onClick={() => setIsOpen(false)}>
						{t('home.nav.whoWeAre')}
					</SidebarLink>
					<SidebarLink href="#project" onClick={() => setIsOpen(false)}>
						{t('home.nav.project')}
					</SidebarLink>
					<SidebarLink href="#contact" onClick={() => setIsOpen(false)}>
						{t('home.nav.contact')}
					</SidebarLink>

					<div style={{ marginTop: 20 }}>
						<LanguageDropDown />
					</div>
				</Sidebar>
			</HeaderContainer>
		</>
	)
}
