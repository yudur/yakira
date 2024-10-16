import { useTranslation } from 'react-i18next'

import { FooterContainer } from './styles'

import whatsappIcon from '../../global/assets/icons/whatsapp.svg'
import instagramIcon from '../../global/assets/icons/instagram.svg'
import yakiraNameIcon from '../../global/assets/icons/yakira-name.svg'
import yakiraCycleIcon from '../../global/assets/icons/Yakira-cycle.svg'

export function Footer() {
	const { t } = useTranslation()

	return (
		<>
			<FooterContainer id="contact">
				<div className="mainFooter">
					<div className="contactLinks">
						<h1>{t('home.sections.contact.title')}</h1>

						<a className="email" href="mailto:informaisif@gmail.com?subject=Snct">
							informaisif@gmail.com
						</a>

						<div className="socialMedia">
							<a href="https://www.instagram.com/informais.if/" target="_blank" rel="noopener noreferrer">
								<img src={instagramIcon} alt="instagram" />
							</a>
							<a href={import.meta.env.VITE_PHONE_NUMBER} target="_blank" rel="noopener noreferrer">
								<img src={whatsappIcon} alt="whatsapp" />
							</a>
						</div>
					</div>

					<div className="logo">
						<img src={yakiraCycleIcon} alt="cycle" />
						<img src={yakiraNameIcon} alt="yakira" />
					</div>
				</div>

				<div className="allRightsReserved">
					<p>{t('home.sections.contact.copyright')}</p>
				</div>
			</FooterContainer>
		</>
	)
}
