import React from 'react';

import { 
	Container, 
	Retweeted,
	RocketseatIcon,
	Body,
	Avatar,
	Content,
	Header,
	Dot,
	Description,
	ImageContent,
	Icons,
	Status,
	CommentIcon,
	RetweetIcon,
	LikeIcon
} from './styles';

const Tweet: React.FC = () => {
	return (
		<Container>
			<Retweeted>
				<RocketseatIcon />
				Você retweetou
			</Retweeted>
			<Body>
				<Avatar />
				<Content>
					<Header>
						<strong>Rocketseat</strong>
						<span>@rocketseat</span>
						<Dot />
						<time>27 de jun</time>
					</Header>
					
					<Description>Foguete não tem ré 🚀</Description>

					<ImageContent />

					<Icons>
						<Status>
							<CommentIcon />
							14
						</Status>
						<Status>
							<RetweetIcon />
							11
						</Status>
						<Status>
							<LikeIcon />
							23
						</Status>
					</Icons>
				</Content>
			</Body>
		</Container>
	);
}

export default Tweet;