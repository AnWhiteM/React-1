import './TransactionHistory .css'

export const TransactionHistory = ({ items }) => {
    return (
      <table className='th-table'>
        <thead >
          <tr >
            <th className='th-head'>Type</th>
            <th className='th-head'>Amount</th>
            <th className='th-head'>Currency</th>
          </tr>
        </thead>
        <tbody >
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className='th-body'>{type}</td>
              <td className='th-body'>{amount}</td>
              <td className='th-body'>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  