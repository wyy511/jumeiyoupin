/* 
	root, router配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home/Home';
import Freeduty from '../pages/Home/Freeduty';
import Mother from '../pages/Home/Mother';
import Luxury from '../pages/Home/Luxury';
import Brand from '../pages/Home/Brand';
import GroupRecommend from '../pages/Group/Recommend';
import GroupMother from '../pages/Group/Mother';
import GroupFitting from '../pages/Group/Fitting';
import GroupClothes from '../pages/Group/Clothes';
import GroupBeauty from '../pages/Group/Beauty';
import Cart from '../pages/Cart';
import Me from '../pages/Me';

const RouterMap = () => {
	return (
		<div>
			<Switch>
				<Route path="/" render={props => (
					<App>
						<Switch>
							<Route exact path="/" component={Home}></Route>
							<Route exact path="/home" component={Home}></Route>
							<Route exact path="/home/freeduty" component={Freeduty}></Route>
							<Route exact path="/home/mother" component={Mother}></Route>
							<Route exact path="/home/luxury" component={Luxury}></Route>
							<Route exact path="/home/brand" component={Brand}></Route>
							<Route path="/group/recommend" component={GroupRecommend}></Route>
							<Route path="/group/mother" component={GroupMother}></Route>
							<Route path="/group/fitting" component={GroupFitting}></Route>
							<Route path="/group/clothes" component={GroupClothes}></Route>
							<Route path="/group/beauty" component={GroupBeauty}></Route>
							<Route path="/cart" component={Cart}></Route>
							<Route path="/me" component={Me}></Route>
							{/* 路由不正确时默认调回home页面 */}
							<Route render={() => <Redirect to="/"/>}></Route>
						</Switch>
					</App>
				)}>
				</Route>
			</Switch>
		</div>
	)
}

export default RouterMap;