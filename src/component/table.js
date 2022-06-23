import React from "react";
import '../css/basicBackground.css'
class ProductRow extends React.Component {

    jumpToDetail = () =>
    {
        let id = this.props.product.id.toString();
        window.location.href = "http://localhost:3000/detail?id=" + id +"";
    }
    render() {
        const product = this.props.product;
        const title = product.stocked ?
            product.title :
            <span style={{color: 'red'}}>
        {product.title}
      </span>;

        return (
            <tr className="mail-min" >
                <td><button onClick={this.jumpToDetail}>{title}</button></td>
                <td><img width={180} alt={product.image} src={product.image}  /></td>
                <td>{product.author}</td>
                <td>{product.price}</td>
                <td>{product.type}</td>

            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        this.props.products.forEach((product) => {
            if (product.title.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.title}
                />
            );
        });

        return (
            <table className="mail-box">
                <thead>
                <tr className="main-title">
                    <th>书名</th>
                    <th>封面</th>
                    <th>作者</th>
                    <th>定价(元）</th>
                    <th>分类</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (

            <form>
                <div className="ghcx-01">
                    <div className="ghcx-01-01">请输入书籍名称：</div>
                    <input
                        className="ghcx-01-02"
                        type="text"
                        placeholder="Search..."
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </div>
            </form>

        );
    }
}

class FilterableProductTable2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}
export{FilterableProductTable2};
