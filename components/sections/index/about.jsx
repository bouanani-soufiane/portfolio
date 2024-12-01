// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Bouanani"
					subTitle="Full-stack developer in training, focusing on backends. I design strong, scalable systems and optimize data flow with a passion for server-side innovation. Learning constantly at YouCode, I gain practical experience through hands-on projects."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/me.webp" alt="me"/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my coding and technical expertise, I also have strong leadership, time management, and multitasking skills honed through my experience as a business. Outside of work, I enjoy staying active through sports such as hiking and camping. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy,I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
	}
	
	const methods 	= [
		{ key: "server", name: "Server Architecture", type: "fas" },
		{ key: "code", name: "API Development", type: "fas" },
		{ key: "database", name: "Database Design", type: "fas" },
		{ key: "code-branch", name: "Version Control", type: "fas" },
		{ key: "shield-alt", name: "Security Implementation", type: "fas" },
		{ key: "cubes", name: "Scalable Solutions", type: "fas" },
		{ key: "sync", name: "Agile Methodologies", type: "fas" },
		{ key: "tachometer-alt", name: "Performance Optimization", type: "fas" },
		{ key: "microchip", name: "Microservices", type: "fas" },
		{ key: "project-diagram", name: "System Design", type: "fas" },
]