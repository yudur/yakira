import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { DropdownButton, DropdownContainer, DropdownContent, DropdownItem } from './styles'

import ptFlagIcon from '../../../global/assets/icons/ptBR-flag.png'
import enFlagIcon from '../../../global/assets/icons/enUS-flag.png'

interface Lang {
	lang: string
	flag: string
	fullName: string
}

export function LanguageDropDown() {
	const { i18n } = useTranslation()
	const [showDropdown, setShowDropdown] = useState<boolean>(false)
	const langs: Lang[] = [
		{
			lang: 'pt-BR',
			flag: ptFlagIcon,
			fullName: 'Português',
		},
		{
			lang: 'en-US',
			flag: enFlagIcon,
			fullName: 'English',
		},
	]
	const [currentLanguage, setCurrentLanguage] = useState<Lang>({} as Lang)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		langs.map((lang) => {
			if (lang.lang === i18n.language) {
				setCurrentLanguage(lang)
			}
		})
	}, [])

	function handleOpenDropdown() {
		setShowDropdown(!showDropdown)
	}

	function handleSelectLanguage(lang: Lang) {
		setCurrentLanguage(lang)
		i18n.changeLanguage(lang.lang)
		setShowDropdown(false)
	}

	return (
		<DropdownContainer>
			<DropdownButton onClick={handleOpenDropdown}>
				<img src={currentLanguage.flag} alt="flag" />
			</DropdownButton>

			<DropdownContent show={showDropdown}>
				{langs.map((lang) => (
					<DropdownItem key={lang.fullName} onClick={() => handleSelectLanguage(lang)}>
						<img src={lang.flag} alt="flag" />
						{lang.fullName}
					</DropdownItem>
				))}
			</DropdownContent>
		</DropdownContainer>
	)
}
