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
							<PartyImage src={bridalParty.stuart} alt='Stuart Casarotto' />
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
							<PartyImage src={bridalParty.becca} alt='Becca Shultz' />
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
							<PartyImage src={bridalParty.diana} alt='Diana Koranda' />
							<PartyName>Diana Koranda</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy>
								Diana and Courtney met through Dance Company and Chi Alpha Pi at
								Augie. Through dance and friendship adventures, Court has found one
								of the strongest leaders and best mama bears out that the world has
								ever known.
							</PartyCopy>
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
								Through Augie greek life, Madeline and Courtney became sorority
								sisters and such close friends. Together they have been co-bigs,
								worked together in Dance Marathon, and worked in Augie’s admissions
								office. This girl always has your back, and I have always been so
								blessed to have her by my side.{' '}
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
							<PartyImage src={bridalParty.stef} alt='Stefanie McWilliams' />
							<PartyName>Stefanie McWilliams</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy>
								Courtney and Stef first met freshman year on the Augustana Vikettes,
								but it wasn't until grad school that they became buddies and
								roommates at Eastern Illinois University. Stef and Court did
								everything together from classes, graduate assistant offices next to
								each other, study buddies, all the way to converting Courtney into a
								workout buddy at 5am :)
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
							<PartyImage src={bridalParty.blair} alt='Blair Casarotto' />
							<PartyName>Blair Casarotto</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy>
								Blair has been one of the best future sister-in-laws and roommates
								that a girl could ask for. Not only is she one of the most caring
								people we know, but she is a one of the most thoughtful friends a
								girl could have.
							</PartyCopy>
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
							<PartyImage src={bridalParty.sinclaire} alt='Andrew Tate' />
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
