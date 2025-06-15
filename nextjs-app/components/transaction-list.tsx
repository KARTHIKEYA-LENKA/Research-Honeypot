import { ArrowDown, ArrowUp } from 'lucide-react'

export function TransactionList() {
const transactions = [
  {
    id: 1,
    description: "Amazon Purchase",
    date: "Today, 2:34 PM",
    amount: "-$45.99",
    type: "debit",
  },
  {
    id: 2,
    description: "Salary Deposit",
    date: "Yesterday, 9:15 AM",
    amount: "+$3,500.00",
    type: "credit",
  },
  {
    id: 3,
    description: "Flipkart Order",
    date: "Mar 15, 11:30 AM",
    amount: "-$129.50",
    type: "debit",
  },
  {
    id: 4,
    description: "PhonePe Transfer",
    date: "Mar 14, 3:45 PM",
    amount: "-$75.00",
    type: "debit",
  },
  {
    id: 5,
    description: "Paytm Recharge",
    date: "Mar 12, 6:20 PM",
    amount: "-$20.00",
    type: "debit",
  },
]

return (
  <div className="space-y-4">
    {transactions.map((transaction) => (
      <div key={transaction.id} className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {transaction.type === "credit" ? (
              <ArrowUp className="h-5 w-5 text-green-600" />
            ) : (
              <ArrowDown className="h-5 w-5 text-red-600" />
            )}
          </div>
          <div>
            <div className="font-medium">{transaction.description}</div>
            <div className="text-sm text-gray-500">{transaction.date}</div>
          </div>
        </div>
        <div className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
          {transaction.amount}
        </div>
      </div>
    ))}
  </div>
)
}
