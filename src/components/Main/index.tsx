import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
	Container, 
	Header, 
	BackIcon, 
	ProfileInfo,
	BottomMenu,
	HomeIcon,
	SearchIcon,
	BellIcon,
	EmailIcon,
} from './styles';

const Main: React.FC = () => {
	return (
		<Container>
			<Header>
				<button>
					<BackIcon />
				</button>

				<ProfileInfo>
					<strong>Átila Rodrigues</strong>
					<span>34 Tweets</span>
				</ProfileInfo>
			</Header>

			<ProfilePage />

			<BottomMenu>
				<HomeIcon />
				<SearchIcon />
				<BellIcon />
				<EmailIcon />
			</BottomMenu>
		</Container>
	);
}

export default Main;