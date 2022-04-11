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

function Layout() {
  return (
    <div>
        <NavBar />
        <Row>
            <Col span={12}>
                <div className="ml-20">
                    <div>
                        <h1 className="text-3xl font-xl">Managing business <br /> payments has never <br /> been easier</h1>
                        <p className="text-md">
                            End-to-end payments and financial management <br/> in a single solution. Meet the right platform to help <br/> realize.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <Button buttonStyle="justify-center w-32 h-12 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                        <span className="ml-2 flex flex-col">
                            <img src={GreenPlayIcon} alt="icon" className="w-36 h-32" />
                        </span>
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <img src={HomeImage} alt="pics" />
            </Col>
        </Row>

        <Row>
            <div className="w-full"><p className="text-lg text-center">Over 32k+ software  businesses growing with AR Shakir</p></div>
            <div className="w-full flex flex-row items-center justify-center mb-8">
                <img className="ml-8 w-20" src={OpenZIcon} alt="icon" />
                <img className="ml-8 w-20" src={OracleIcon} alt="icon" />
                <img className="ml-8 w-20" src={MorpheusIcon} alt="icon" />
                <img className="ml-8 w-20" src={SamsungIcon} alt="icon" />
                <img className="ml-8 w-20" src={MondayIcon} alt="icon" />
                <img className="ml-8 w-20" src={SegmentIcon} alt="icon" />
            </div>
        </Row>

        <Row>
            <Col span={12}>
                <img src={IllustrationImage} alt="pics" />
            </Col>
            <Col span={12}>
                <div className="ml-0">
                    <div>
                        <a href="#" className="text-md">
                            OUR FEATURE
                        </a>
                        <h1 className="text-3xl font-xl mt-3">Receive payments <br/> quickly from anywhere</h1>
                        <p className="text-md">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <Button buttonStyle="justify-center w-32 h-12 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                    </div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col span={13} className="bg-gray-200">
                <div className="ml-20 mt-10">
                    <div>
                        <a href="#" className="text-md">
                            OUR FEATURE
                        </a>
                        <h1 className="text-3xl font-xl">Receive payments <br/> quickly from anywhere</h1>
                        <p className="text-md">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                </div>
            </Col>
            <Col span={11}>
                <div className="p-8 bg-gray-200">
                        <h1 className="text-lg text-blue-300">
                            GET STARTED FOR FREE
                        </h1>
                <form action="#" method="POST" className="border rounded-md ">
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="street-address" id="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="text" name="street-address" id="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        
                        <div className="col-span-6">
                           <Button buttonStyle="w-full justify-center h-12 font-medium rounded-xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" buttonText="GET STARTED" />
                        </div>

                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </Col>
        </Row>

        <Divider/>

        <Row>
            <Col span={12}>
                <div className="ml-20">
                    <div>
                        <a href="#" className="text-md">
                            OUR FEATURE
                        </a>
                        <h1 className="text-3xl font-xl mt-3">All payments are <br/>linked to your Financy <br/>account</h1>
                        <p className="text-md">
                            Why kept very ever home mrs. Considered sympathize ten <br/> uncommonly occasional assistance sufficient not. Letter of on <br/> become he tended active enable to. 
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <Button buttonStyle="justify-center w-32 h-12 font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Get Started" />
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <img src={CardPlayIcon} alt="pics" />
            </Col>
        </Row>

        <Row>
            <div className="flex ml-20 w-10/12 justify-between items-center p-6 border rounded-md border-inherit">
                <div>
                    <p className="">And residence for met the estimable disposing. Mean if he they been no hold mr. Is<br/> at much do made took held help.</p>
                </div>
                <div>
                    <Button buttonStyle="w-32 justify-self-end self-end h-10 font-medium rounded-3xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" buttonText="Get Started" />
                </div>
            </div>
        </Row>
    </div>
  )
}

export default Layout