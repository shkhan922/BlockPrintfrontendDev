import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from "../common/products";
import BlogSection from "../common/blogsection";
import Instagram from "../common/instagram";
import LogoBlock from "../common/logo-block";
import {
    svgFreeShipping, 
    svgservice,
    svgoffer
} from "../../../services/script"


class Fashion extends Component {

    componentDidMount() {
        // document.getElementById("color").setAttribute("href", `#` );
    }

	render() {
        console.log('fashion render() called')
		return (
            <h1>Fashion</h1>
	    )
	}
}

export default Fashion;