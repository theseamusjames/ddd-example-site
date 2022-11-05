import * as React from 'react';
export default function GalleryThumbnail({image, clickEvent}) {
	return (
		<li 
			onClick={clickEvent}
			data-testid='thumbnail'
			style={{backgroundImage: `url(/assets/${image})`}}
		/>
	);
}