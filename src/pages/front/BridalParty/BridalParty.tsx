import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	PartyContainer,
	PartyContent,
	PartyLeftColumn,
	PartyRightColumn,
	PartyWrapper,
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
					<PartyLeftColumn>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Stuart Casarotto' title='' />
							<PartyName>Stuart Casarotto</PartyName>
							<PartyTitle>Groom</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Hayden Whilsey' title='' />
							<PartyName>Hayden Whilsey</PartyName>
							<PartyTitle>Best Man & Officiant</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.parker} alt='Parker Casarotto' title='' />
							<PartyName>Parker Casarotto</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.chad} alt='Chad Casarotto' title='' />
							<PartyName>Chad Casarotto</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.mark} alt='Mark Hoffmann' title='' />
							<PartyName>Mark Hoffmann</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.austin} alt='Austin Tate' title='' />
							<PartyName>Austin Tate</PartyName>
							<PartyTitle>Groomsmen</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.elliot} alt='Elliot Casarotto' title='' />
							<PartyName>Elliot Casarotto</PartyName>
							<PartyTitle>Ring Bearer</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Andrew Tate' title='' />
							<PartyName>Andrew Tate</PartyName>
							<PartyTitle>Usher</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
					</PartyLeftColumn>
					<PartyRightColumn>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Courtney Tate' title='' />
							<PartyName>Courtney Tate</PartyName>
							<PartyTitle>Bride</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Becca Shultz' title='' />
							<PartyName>Becca Shultz</PartyName>
							<PartyTitle>Maid of Honor</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Diana Koranda' title='' />
							<PartyName>Diana Koranda</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Madeline Gorsuch' title='' />
							<PartyName>Madeline Gorsuch</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage
								src={bridalParty.hayden}
								alt='Stefanie McWilliams'
								title=''
							/>
							<PartyName>Stefanie McWilliams</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Blair Casarotto' title='' />
							<PartyName>Blair Casarotto</PartyName>
							<PartyTitle>Bridesmaid</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage
								src={bridalParty.ellinor}
								alt='Ellinor Casarotto'
								title=''
							/>
							<PartyName>Ellinor Casarotto</PartyName>
							<PartyTitle>Flower Girl</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
						<PartyWrapper>
							<PartyImage src={bridalParty.hayden} alt='Andrew Tate' title='' />
							<PartyName>Sinclaire Casarotto</PartyName>
							<PartyTitle>Usher</PartyTitle>
							<PartyCopy></PartyCopy>
						</PartyWrapper>
					</PartyRightColumn>
				</PartyContent>
			</PartyContainer>
		</PageWrapper>
	)
}
