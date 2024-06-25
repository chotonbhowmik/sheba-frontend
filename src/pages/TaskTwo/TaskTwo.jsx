
import data from "../../components/data/data.json"; 

const TaskTwo = () => {
  // here i am Adding 15% VAT and filter items where price is above 50
  const processedItems = data
    .map((item) => ({
      ...item,
      priceWithVAT: item.price * 1.15,
    }))
    .filter((item) => item.priceWithVAT > 50);

  // Calculate the total price
  const totalPrice = processedItems.reduce(
    (acc, item) => acc + item.priceWithVAT,
    0
  );
  const priceWithoutTax = processedItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Processed Items with VAT
      </h1>
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-3 gap-4 font-bold border-b border-gray-300 pb-2">
          <div>Product Name</div>
          <div>Original Price</div>
          <div>Price with VAT</div>
        </div>
        {processedItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 py-2 border-b border-dotted border-gray-300"
          >
            <div>{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
            <div className="">
              ${item.priceWithVAT.toFixed(2)}
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="font-bold text-green-500">Total Price</div>
          <div className="font-bold text-green-500">
            ${priceWithoutTax.toFixed(2)}
          </div>
          <div className="font-bold text-green-500">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTwo;
