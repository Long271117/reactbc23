import React, { Component } from 'react'

export default class RenderArray extends Component {

    arrProduct = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 5000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 6000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 7000 },
        { id: 4, name: 'steel car', img: './img/products/steel-car.jpg', price: 8000 },
    ]

    renderCarProduct = () => {
        // // Cách 1:
        // let result = [];
        // for(let product of this.arrProduct) {
        // // Tạo ra object nên ko dùng string template (tạo ra chuỗi)
        //     let tr = <tr key={product.id}> // Dùng key để phân biệt các object trong mảng vì react sẽ thông báo lỗi, thường là id hoặc index
        //         <td>{product.id}</td>
        //         <td>{product.id}</td>
        //         <td><img src={product.img} alt='...' width={50} height={50} /></td>
        //         <td>{product.price}</td>
        //         <td></td>
        //     </tr>;

        //     result.push(tr); // [<tr>...</tr>,<tr>....</tr>,<tr>....</tr>,<tr>....</tr>]
        // }

        // // Cách 2:
        let result = this.arrProduct.map((product, index) => {
            return <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.img} alt='...' width={50} height={50} /></td>
                <td>{product.price}</td>
                <td></td>
            </tr>
        })

        // Trả về result là một array
        return result;
    }

    renderCard = () => {
        let result = this.arrProduct.map((product,index) => {
            return <div className='col-3' key={index}>
                <div className='card'>
                    <div className='card-header bg-dark text-white'>
                        <h3>{product.name}</h3>
                    </div>
                    <img src={product.img} alt="..." className='w-100' />
                    <div className='card-body'>
                        <p>{product.price}</p>
                        <button className='btn btn-success'>Add to carts</button>
                    </div>
                </div>
            </div>
        });
        return result;
    }


    render() {
        //   console.log(<div></div>)
        return (
            <div className='container mt-5'>
                <h3>Danh sách xe hơi</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCarProduct()}
                        {/* <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr> */}
                    </tbody>
                </table>

                <div className='row mt-5'>
                    {this.renderCard()}
                </div>

            </div>
        )
    }
}
