export default function FilterButtons({ filter, filters, onFilterChange }) {
	return (
		<ul className="filter-list">
			{filters.map((value, index) => {
				return (
					<li key={index}>
						<button
							type="button"
							onClick={() => onFilterChange(value)}
							className={filter === value ? "is-active" : ""}
						>
							{value}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
