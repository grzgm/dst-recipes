import React from 'react'

import './Mockup.css'

import food from './food'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'
import iconDonot from './images/icons/donot.png'

import imgHoneyham from './images/crockpot/honeyham.webp'
import imgMeatystew from './images/crockpot/meatystew.webp'
import imgMeatballs from './images/crockpot/meatballs.webp'

import imgFrame from './images/ingredients/frame.webp'
import imgMeats from './images/ingredients/meats.webp'
import imgAny from './images/ingredients/any.webp'
import imgInedible from './images/ingredients/twigs.webp'
import { Tag } from 'reactstrap'


class Card extends React.Component {

	checkRecipes = (recipes) => {

		if(!recipes) {
			return;
		} else {

			const items = [];

			for (const [key, value] of recipes.entries()) {
				items.push(
					<>
						<div className="ingredient-icon">
							<img src={require(`./images/ingredients/${value[0]}.webp`)} alt={value[0]} />
						</div>
						<div className="ingredient-icon">
							<img src={require(`./images/ingredients/${value[1]}.webp`)} alt={value[1]} />
						</div>
						<div className="ingredient-icon">
							<img src={require(`./images/ingredients/${value[2]}.webp`)} alt={value[2]} />
						</div>
						<div className="ingredient-icon">
							<img src={require(`./images/ingredients/${value[3]}.webp`)} alt={value[3]} />
						</div>
					</>
				)
			}
			return(
				<>
					{items}
				</>
			)
		}
	}

	checkFoodRestrictions = (foodRestrictions) => {

		if(!foodRestrictions || foodRestrictions[0] === 'none') {
			return;
		} else {

			/* push jsx with img src into array, return array after loops */
			const items = [];

			for (const [key, value] of foodRestrictions.entries()) {
				items.push(
					<div className="ingredient-restriction-container" key={key}>
						<div className="ingredient-restriction">
							<img src={imgFrame} className="food-icon-frame" />
							<img src={iconDonot} className="food-icon-donot" />
							<img src={require(`./images/ingredients/${value}.webp`)} className="food-icon-restriction" />
						</div>
					</div>
				)
			}
			return(
				<>
					{items}
				</>
			)
		}
	}

	render() {

		return(

			<div className="test-card">
				<div className="row-top">

					<div className="row-half row-left">
						<img src={require(`${this.props.foodImg}`)} className="food-img" />
					</div>

					<div className="row-half row-right">

						<div className="row-top">
							<div className="food-icon-container">
								
								<div className="food-icon">
									<img src={iconHealth} />
									<span className="food-icon-value">
										{this.props.foodHp}
									</span>
								</div>

								<div className="food-icon">
									<img src={iconHunger} />
									<span className="food-icon-value">
										{this.props.foodHunger}
									</span>
								</div>

							</div>
						</div>

						<div className="row-btm">
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconSanity} />
									<span className="food-icon-value">
										{this.props.foodSanity}
									</span>
								</div>

								<div className="food-icon">
									<img src={iconRot} />
									<span className="food-icon-value">
										{this.props.foodRot}
									</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>

				<div className="row-mid">
					<div className="food-name">
						{this.props.foodName}
					</div>
				</div>

				{/* foodRecipes[] */}

				<div className="row-bot">
					{this.checkRecipes(this.props.foodRecipes)}
				</div>

				
				<div className="row-bot text-right">
					{this.checkFoodRestrictions(this.props.foodRestrictions)}
				</div>

			</div>
		)

	}

}

export default Card;