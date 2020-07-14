import React from 'react';

import Feed from '../Feed';

import { 
	Container, 
	Banner, 
	Avatar, 
	ProfileData, 
	LocationIcon, 
	CakeIcon, 
	Followage,
	EditButton
} from './styles';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>
			
			<ProfileData>
				<EditButton outlined>Editar perfil</EditButton>
				<h1>Átila Rodrigues</h1>
				<h2>@atilara</h2>

				<p>
					Portfolio at <a href="https://github.com/atilara">@GitHub</a>
				</p>

				<ul>
					<li>
						<LocationIcon />
						Olinda, Brasil
					</li>
					<li>
						<CakeIcon />
						Nascido(a) em 13 de setembro
					</li>
				</ul>

				<Followage>
					<span>
						seguindo <strong>43</strong> 
					</span>
					<span>
						<strong>57 </strong> seguidores
					</span>
				</Followage>
			</ProfileData>
			<Feed>

			</Feed>
		</Container>
	);
}

export default ProfilePage;