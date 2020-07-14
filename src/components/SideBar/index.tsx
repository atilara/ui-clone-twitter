import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
	Container,
	SearchWrapper,
	SearchInput,
	SearchIcon,
	Body 
} from './styles';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchInput placeholder="Buscar no Twitter" />
				<SearchIcon />
			</SearchWrapper>
			{/* Comportamento do scroll semelhante ao do Twitter */}
			<StickyBox>
				<Body>
					<List 
						title="Talvez você curta"
						elements={[
							<FollowSuggestion 
								name="Usuário randômico"
								nickname="@user"
							/>,
							<FollowSuggestion 
								name="Usuário randômico"
								nickname="@user"
							/>,
							<FollowSuggestion 
								name="Usuário randômico"
								nickname="@user"
							/>,
						]}
					/>

					<List 
						title="Talvez você curta"
						elements={[
							<News />,
							<News />,
							<News />,
						]}
					/>
					<List 
						title="Talvez você curta"
						elements={[
							<News />,
							<News />,
							<News />,
						]}
					/>
					<List 
						title="Talvez você curta"
						elements={[
							<News />,
							<News />,
							<News />,
						]}
					/>
					<List 
						title="Talvez você curta"
						elements={[
							<News />,
							<News />,
							<News />,
						]}
					/>
				</Body>
			</StickyBox>
		</Container>
	);
}

export default SideBar;