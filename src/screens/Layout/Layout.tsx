import React from 'react'
import { Row, Col, Divider } from 'antd'

//import components
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'

//import asserts
import HomeImage from '../../assets/Group1.png'
import IllustrationImage from '../../assets/Illustration.png'
import CardPlayIcon from '../../assets/Cards.png'
import GreenPlayIcon from '../../assets/Group 177.png'
import SegmentIcon from '../../assets/Group (6).png'
import MondayIcon from '../../assets/Group (5).png'
import SamsungIcon from '../../assets/Group (4).png'
import MorpheusIcon from '../../assets/Group (3).png'
import OracleIcon from '../../assets/Group (2).png'
import OpenZIcon from '../../assets/Group (1).png'

const Layout: React.FC = () => {
  return (
    <div>
        <NavBar />
        <Row>
            <Col span={24} sm={12}>
                <div className="ml-4 sm:ml-44 sm:mt-12">
                    <div>
                        <h1 className="sm:text-4xl text-2xl font-xl">Managing business <br /> payments has never <br /> been easier</h1>
                        <p className="text-xl">
                            End-to-end payments and financial management <br/> in a single solution. Meet the right platform to help <br/> realize.
                        </p>
                    </div>
                    <div className="flex sm:flex-row">
                        <Button buttonStyle="justify-center text-xl w-56 h-14 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                        <span className="mr-2 sm:mr-0 sm:ml-2 flex flex-col">
                            <img src={GreenPlayIcon} alt="icon" className="w-52 h-52" />
                        </span>
                    </div>
                </div>
            </Col>
            <Col span={24} sm={12}>
                <img src={HomeImage} alt="pics" />
            </Col>
        </Row>

        <Row>
            <div className="w-full"><p className="m-9 sm:m-0 text-lg text-center">Over 32k+ software  businesses growing with AR Shakir</p></div>
            <div className="w-full grid grid-cols-2 mr-24 sm:flex items-center justify-center mb-8">
                <img className="mt-3 ml-16 w-24 sm:w-28" src={OpenZIcon} alt="icon" />
                <img className="mt-3 ml-16 w-24 sm:w-28" src={OracleIcon} alt="icon" />
                <img className="mt-3 ml-16 w-24 sm:w-28" src={MorpheusIcon} alt="icon" />
                <img className="mt-3 ml-16 w-24 sm:w-28" src={SamsungIcon} alt="icon" />
                <img className="mt-3 ml-16 w-24 sm:w-28" src={MondayIcon} alt="icon" />
                <img className="mt-3 ml-16 w-24 sm:w-28" src={SegmentIcon} alt="icon" />
            </div>
        </Row>

        <Row>
            <Col span={24} sm={12}>
                <img src={IllustrationImage} alt="pics" />
            </Col>
            <Col span={24} sm={12}>
                <div className="ml-12 sm:ml-0 sm:mt-20">
                    <div>
                        <a href="#" className="text-xl">
                            OUR FEATURE
                        </a>
                        <h1 className="sm:text-4xl text-2xl font-xl font-xl mt-3">Receive payments <br/> quickly from anywhere</h1>
                        <p className="text-xl">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <Button buttonStyle="justify-center text-xl w-56 h-14 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                    </div>
                </div>
            </Col>
        </Row>

        <Row className="ml-6 mt-6 w-10/12 border border-solid rounded-3xl bg-gray-200 sm:ml-24">
            <Col span={24} sm={14}>
                <div className="ml-6 sm:ml-20 mt-10">
                    <div>
                        <a href="#" className="text-xl">
                            OUR FEATURE
                        </a>
                        <h1 className="sm:text-4xl text-2xl font-xl pt-9">Receive payments <br/> quickly from anywhere</h1>
                        <p className="text-md sm:text-xl">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                </div>
            </Col>
            <Col span={24} sm={10}>
                <div className="p-8 sm:w-9/12">
                        <h1 className="text-xl text-blue-300">
                            GET STARTED FOR FREE
                        </h1>
                <form action="#" method="POST" className="p-0 m-0">
                    <div className="py-5 bg-gray-200">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label className="block text-xl font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="name" id="name" className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                            <label className="block text-xl font-medium text-gray-700">Email Address</label>
                            <input type="text" name="street-address" id="street-address" className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        
                        <div className="col-span-6">
                           <Button buttonStyle="w-full justify-center h-12 text-xl font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" buttonText="GET STARTED" />
                        </div>

                        </div>
                    </div>
                </form>
                </div>
            </Col>
        </Row>

        <Divider/>

        <Row>
            <Col span={24} sm={12}>
                <div className="ml-12 sm:ml-40 sm:mt-24">
                    <div>
                        <a href="#" className="text-xl">
                            OUR FEATURE
                        </a>
                        <h1 className="sm:text-4xl text-2xl font-xl mt-3">All payments are <br/>linked to your Financy <br/>account</h1>
                        <p className="text-xl">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <Button buttonStyle="justify-center text-xl w-56 h-14 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                    </div>
                </div>
            </Col>
            <Col span={24} sm={12}>
                <img src={CardPlayIcon} alt="pics" />
            </Col>
        </Row>

        <Row className="sm:pb-32 sm:p-20">
            <div className="flex flex-col sm:flex-row ml-6 sm:ml-20 w-11/12 items-center p-6 border rounded-md border-inherit">
                <div>
                    <p className="text-xl">And residence for met the estimable disposing. Mean if he they been no hold mr. Is<br/> at much do made took held help.</p>
                </div>
                <div className="w-full sm:w-0">
                    <Button buttonStyle="text-xl w-full sm:ml-12 sm:w-56 h-14 sm:justify-self-end self-end h-10 font-medium rounded-3xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" buttonText="Get Started" />
                </div>
            </div>
        </Row>

        <Row className="bg-slate-900 text-white p-16 sm:p-48 sm:pl-24 sm:pr-24 mt-6">
            <Col span={24} sm={12} className="mb-3 sm:mt-0">
                <h1 className="text-xl font-xl text-white">AR SHAKIR</h1>
                <p className="text-md text-slate-500">Yet bed any for travelling assistance indulgence unpleasing. Not <br/> thoughts all exercise blessing. Indulgence way everything joy <br/> alteration boisterous the attachment.</p>
            </Col>
            <Col span={24} sm={4} className="text-center mt-3 sm:mt-0 sm:text-left">
                <h1 className="text-xl text-white font-xl">Company</h1>
                <ul>
                    <li className="text-md">About Us</li>
                    <li className="text-md">Careers</li>
                    <li className="text-md">Blog</li>
                    <li className="text-md">Pricing</li>
                </ul>
            </Col>
            <Col span={24} sm={4} className="text-center mt-3 sm:mt-0 sm:text-left">
                <h1 className="text-xl text-white font-xl">Product</h1>
                <ul>
                    <li className="text-md">Invoicing Platform</li>
                    <li className="text-md">Accounting Platform</li>
                    <li className="text-md">Create Proposal</li>
                    <li className="text-md">Contacts</li>
                </ul>
            </Col>
            <Col span={24} sm={4} className="text-center mt-3 sm:mt-0 sm:text-left">
                <h1 className="text-xl text-white font-xl">Resources</h1>
                <ul>
                    <li className="text-md">Proposal Template</li>
                    <li className="text-md">Invoice Template</li>
                    <li className="text-md">Tutorial</li>
                    <li className="text-md">How to write a contract</li>
                </ul>
            </Col>

        </Row>
            <div className="sm:flex border-t-2 border-gray-600 bg-slate-900 text-white sm:justify-around text-center items-center p-6">
                <div>
                <p className="sm:m-0 sm:ml-0 sm:w-full w-48 ml-20">2022 AR Shakir. All rights. Privacy Policy Terms of Services</p>
                </div>
                <div>
                <p className="sm:m-0 sm:mt-0 mt-9 sm:ml-0 sm:w-full w-48 ml-20">Supported by Microsoft Startup</p>
                </div>
            </div>
    </div>
  )
}

export default Layout