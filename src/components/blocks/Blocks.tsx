/* Styles */
import './styles/blocks.scss';

/* Scripts */
import { ListProps } from './scripts/blocks-types';

export const List = (props: ListProps) => {
	const { children, className: propClassName, reversed, start, type: listType, variant = 'ul', ...rest } = props;
	const isOrdered = variant.includes('ol');
	const isUnstyled = variant.includes('unstyled');
	const Tag = isOrdered ? 'ol' : 'ul';
	const classes = `list-${isUnstyled ? 'unstyled' : isOrdered ? 'ordered' : 'unordered'}`;
	const className = propClassName ? `${propClassName} ${classes}` : classes;
	const olAttributes = isOrdered ? { reversed, start, type: listType } : {};

	return (
		<Tag className={className} {...rest} {...olAttributes}>
			{children}
		</Tag>
	);
};
