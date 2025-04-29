export default function FilterButtons({
	filter,
	filters,
	onFilterChange,
	doneCount,
	totalCount,
}) {
	return (
		<div className="controller">
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
			<div className="count">
				<p>
					{doneCount} / {totalCount}
				</p>
			</div>
		</div>
	);
}
