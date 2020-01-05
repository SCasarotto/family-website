import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	PartyContainer,
	PartyContent,
	PartyRow,
	PartyLeftColumn,
	PartyRightColumn,
	PartyImage,
	PartyName,
	PartyTitle,
	PartyCopy,
} from './styledComponents'
import { PageWrapper } from 'components'
import { bridalParty } from 'config/images'

export const BridalParty = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>Meet some of the best people we know</HeaderTitle>
				</HeaderContent>
			</Header>
			<PartyContainer>
				<PartyContent>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.hayden} alt='Stuart Casarotto' />
							<PartyName>Stuart Casarotto</PartyName>
							<PartyTitle>Groom</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Courtney Tate' />
							<PartyName>Courtney Tate</PartyName>
							<PartyTitle>Bride</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.hayden} alt='Hayden Wilsey' />
							<PartyName>Hayden Wilsey</PartyName>
							<PartyTitle>Best Man & Officiant</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Becca Shultz' />
							<PartyName>Becca Shultz</PartyName>
							<PartyTitle>Maid of Honor</PartyTitle>
							<PartyCopy>
								Augustana brought Courtney and Becca together on day 0 of Augustana
								through Vikettes and Dance Company clinics, and the rest is history!
								Through Camp Kesem, the Chi Alpha Pi sorority, and dance, they have
								been best friends ever since.
							</PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.parker} alt='Parker Casarotto' />
							<PartyName>Parker Casarotto</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Diana Koranda' />
							<PartyName>Diana Koranda</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.chad} alt='Chad Casarotto' />
							<PartyName>Chad Casarotto</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.madeline} alt='Madeline Gorsuch' />
							<PartyName>Madeline Gorsuch</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy>
								Through Augustana greek life, Madeline and Courtney became sorority
								sisters. Together they have been co-bigs, worked together in Dance
								Marathon, and worked in Augie’s admissions office.{' '}
							</PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.mark} alt='Mark Hoffmann' />
							<PartyName>Mark Hoffmann</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Stefanie McWilliams' />
							<PartyName>Stefanie McWilliams</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy>
								Courtney and Stef first met freshman year on the Augustana Vikettes,
								but their paths didn’t cross again until Courtney switched majors to
								Communication Sciences & Disorders. Court and Stef ended up going to
								Eastern Illinois University and rooming together during grad school
								where they did everything together from being workout buddy to study
								buddy.
							</PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.austin} alt='Austin Tate' />
							<PartyName>Austin Tate</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Blair Casarotto' />
							<PartyName>Blair Casarotto</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.elliot} alt='Elliot Casarotto' />
							<PartyName>Elliot Casarotto</PartyName>
							<PartyTitle>Ring Bearer</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.ellinor} alt='Ellinor Casarotto' />
							<PartyName>Ellinor Casarotto</PartyName>
							<PartyTitle>Flower Girl</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyRightColumn>
					</PartyRow>
					<PartyRow>
						<PartyLeftColumn>
							<PartyImage src={bridalParty.hayden} alt='Andrew Tate' />
							<PartyName>Andrew Tate</PartyName>
							<PartyTitle>Usher</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyLeftColumn>
						<PartyRightColumn>
							<PartyImage src={bridalParty.hayden} alt='Andrew Tate' />
							<PartyName>Sinclaire Casarotto</PartyName>
							<PartyTitle>Usher</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyRightColumn>
					</PartyRow>
				</PartyContent>
			</PartyContainer>
		</PageWrapper>
	)
}
