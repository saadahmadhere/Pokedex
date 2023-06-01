import '../../styles/pagination.css';

const Pagination = ({
	previousUrl,
	nextUrl,
	handlePreviousButtonClick,
	handleNextButtonClick,
}) => {
	return (
		<div className='pagination'>
			<button
				type='button'
				className='btn-pagination'
				disabled={!previousUrl}
				onClick={handlePreviousButtonClick}
			>
				&lt;- Previous
			</button>
			<button
				type='button'
				className='btn-pagination'
				disabled={!nextUrl}
				onClick={handleNextButtonClick}
			>
				Next -&gt;
			</button>
		</div>
	);
};

export default Pagination;
