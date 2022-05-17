import './table.scss'
import Select from '../select/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React, { useEffect, useState, useMemo } from 'react'
import { TableHeader, Pagination, Search } from './index'
import useFullPageLoader from './useFullPageLoader'
import 'bootstrap/dist/css/bootstrap.css'
const Table = () => {
  const [comments, setComments] = useState([])
  const [loader, showLoader, hideLoader] = useFullPageLoader()
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState({ field: '', order: '' })

  const ITEMS_PER_PAGE = 50

  const headers = [
    { name: 'Item Type', field: 'name', sortable: false },
    { name: 'Price', field: 'name', sortable: true },
    { name: 'Transaction no', field: 'transaction', sortable: true },
    { name: 'Time', field: 'body', sortable: false },
    { name: 'Status', field: 'body', sortable: false },
  ]

  useEffect(() => {
    const getData = () => {
      showLoader()

      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => {
          hideLoader()
          setComments(json)
          console.log(json)
        })
    }

    getData()
  }, [])

  const commentsData = useMemo(() => {
    let computedComments = comments

    if (search) {
      computedComments = computedComments.filter(
        (comment) =>
          comment.title.toLowerCase().includes(search.toLowerCase()) ||
          comment.category.toLowerCase().includes(search.toLowerCase()),
      )
    }

    setTotalItems(computedComments.length)

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === 'asc' ? 1 : -1
      computedComments = computedComments.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]),
      )
    }

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    )
  }, [comments, currentPage, search, sorting])

  return (
    <div className="table">
      <div className="">
        <div className="payment">Payments</div>
        <div className="table-options">
          <div className="show-payment">
            <p>
              Showing
              <span className="payment-numb">20</span>
              out of 500 payments
            </p>
          </div>
          <div className="search">
            <SearchOutlinedIcon />
            <Search
              onSearch={(value) => {
                setSearch(value)
                setCurrentPage(1)
              }}
            />

            {/* <input type="text" placeholder="Search Payments" /> */}
          </div>
          <div className="select">
            <Select />
          </div>
        </div>
      </div>

      <div>
        <table className="table table-striped">
          <TableHeader
            headers={headers}
            onSorting={(field, order) => setSorting({ field, order })}
          />
          <tbody>
            {commentsData.map((comment) => (
              <tr className="table-price">
                <th className="table-item" scope="row" key={comment.id}>
                  <div className="item">
                    <div className="customer-image">
                      <img src={comment.image} alt="image" />
                    </div>
                    <p>{comment.title}</p>
                  </div>
                </th>
                <td className="table-price">{comment.price}</td>
                <td className="table-price">{comment.price}</td>
                <td className="table-price">{comment.price}</td>
                <td>
                  <div className="stat">
                    <div
                      className={
                        comment.category === 'jewelery'
                          ? 'indicator-reconciled'
                          : comment.category === 'electronics'
                          ? 'indicator-unreconciled'
                          : 'indicator'
                      }
                    ></div>
                    <div
                      style={
                        comment.category === 'jewelery'
                          ? { color: '#27AE60' }
                          : comment.category === 'electronics'
                          ? { color: '#EBC315' }
                          : { color: '#7F8FA4' }
                      }
                    >
                      {comment.category}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="show-payment">
          <p>
            Showing
            <span className="payment-numb">20</span>
            out of 500 payments
          </p>
        </div>
        <div className="pagination">
          <Pagination
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      {loader}
    </div>
  )
}

export default Table
