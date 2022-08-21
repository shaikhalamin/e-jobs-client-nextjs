import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface PaginationProps {
    onChange: (pageNumber: number) => void;
    total?: number,
    perPage?: number
}

const BasicPagination: React.FC<PaginationProps> = ({ total = 0, perPage = 20, onChange }) => {

    const [active, setActive] = useState(1);
    const [itemTotal, setItemTotal] = useState(5);

    const handleChange = (page: number) => {
        setActive(page);
        onChange(page);
    }

    let paginationItem = total < perPage ? 1 : Number(Math.ceil(total / perPage));

    let items: any = [];
    for (let number = 1; number <= paginationItem; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => handleChange(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <Pagination>
                <Pagination.First disabled={active === 1} onClick={() => active > 2 ? handleChange(active - 2) : handleChange(1)} />
                <Pagination.Prev disabled={active === 1} onClick={() => active > 1 ? handleChange(active - 1) : handleChange(1)} />
                {items}
                <Pagination.Next onClick={() => active > paginationItem - 1 ? handleChange(1) : handleChange(active + 1)} />
                <Pagination.Last onClick={() => active > paginationItem - 2 ? handleChange(1) : handleChange(active + 2)} />
            </Pagination>
        </>
    );
}

export default BasicPagination;