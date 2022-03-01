import Header from "./Header";


export default function Product() {
  return (
    <><Header />

  <div className="col-sm-4 offset-sm-4">
      
     <h1> Product Page</h1> 
     <input type="text" className="form-control" placeholder="name"/><br />
     <input type="file" className="form-control" placeholder="file"/><br />
     <input type="text" className="form-control" placeholder="price"/><br />
     <input type="text" className="form-control" placeholder="description"/><br />
     <button className="btn btn-primary ">Add Product</button>
      </div>
      </>
  )
}
