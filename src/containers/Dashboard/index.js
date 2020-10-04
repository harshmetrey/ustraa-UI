import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../actions/categoryActions";
import { getProducts } from "../../actions/productActions";
import { withRouter } from "react-router-dom";


import { CategoryLists } from '../../components/CategoryLists'
import { ProductLists } from '../../components/ProductLists'

import { Box, Typography } from "@material-ui/core";
import { FooterActionBar } from "../../components/FooterActionBar";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            ProductList: [],
            listStatus: ""
        };
    }

    componentDidMount = async () => {
        const category = await this.props.getCategory();
        this.setState({
            categoryList: category.category_list,
            ProductList: category.product_list,
        })
    }

    handleCatogoryChange = async (changedId, name) => {
        const products = await this.props.getProducts(changedId);
        this.setState({
            ProductList: products,
            SelectedCategory: name,
            listStatus: "[+] show more",
        })
    }

    handleListRender = (text) => {
            this.setState({
                listStatus: text
            })
    }


    render() {
        const { categoryList, ProductList, SelectedCategory, listStatus } = this.state;
        return (
            <div className="dashboard-conatiner">
                <Box padding={2}>
                    <Typography>Our Products</Typography>
                </Box>
                <CategoryLists data={categoryList} handleCatogoryChange={this.handleCatogoryChange} />
                <ProductLists data={ProductList && ProductList.products} count={ProductList.count} category={SelectedCategory} ListRenderText={listStatus} />
                {SelectedCategory && <FooterActionBar category={SelectedCategory} handleListRender={this.handleListRender} menuItems={categoryList} handleCatogoryChange={this.handleCatogoryChange}/>}
            </div>
        );
    }
}

export default withRouter(
    connect(null, { getCategory, getProducts })(Dashboard)
);
