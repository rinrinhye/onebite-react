export default function SearchInput({ search, onSearchChange }) {
	return (
		<input
			className="search-input"
			type="text"
			placeholder="검색어 입력"
			onChange={(e) => onSearchChange(e.target.value)}
			value={search}
		/>
	);
}
