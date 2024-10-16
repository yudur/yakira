import { useTranslation } from 'react-i18next'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Main } from './styles'

import indoorGreenhouseImg from '../../global/assets/images/indoor-greenhouse.png'

export function HomePage() {
	const { t } = useTranslation()

	return (
		<>
			<Header />

			<Main id="project">
				<div className="container">
					<div className="indor">
						<img src={indoorGreenhouseImg} alt="indoor greenhouse" />
					</div>

					<div className="content">
						<p>
							{t('home.sections.project.partOne')} <span>{t('home.sections.project.partTwo')}</span>{' '}
							{t('home.sections.project.patThree')}
						</p>
					</div>
				</div>
			</Main>

			<Footer />
		</>
	)
}
