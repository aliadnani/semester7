---
title: Chapter 1 – Introduction To Heat Transfer
sidebar_label: Chapter 1 – Introduction To Heat Transfer
---

## Intended Learning Outcomes

Students will able to understand the basic mechanisms of heat transfer, which are:
- Conduction
- Convection
- Radiation 
- Fourier's law of heat conduction
- Newton's law of cooling
- Stefan–Boltzmann law of radiation

## Conduction

The rate of heat conduction **Q<sub>cond</sub>** through a **plane layer** is proportional to the temperature difference **ΔT** and surface area; and is inversely proportional to the thickness.

![](assets/2020-09-08-13-05-54.png)

![](assets/2020-09-08-13-13-28.png)

### Fourier's Law of Heat Conduction

**Thermal conductivity, k**: A measure of the ability of a material to conduct heat. 

![](assets/2020-09-08-13-17-14.png)

For some gasses the conductivity increases with their temperature

**Temperature gradient dT/dx**: The slope of the temperature curve on a T-x diagram.

![](assets/2020-09-08-13-08-39.png)

Heat is conducted in the direction of decreasing temperature, and the temperature gradient becomes negative when temperature decreases with increasing x. The negative sign in the equation ensures that heat transfer in the positive x direction is a positive quantity.

![](assets/2020-09-08-13-10-11.png)

<!-- #### An example

The roof of an electrically heated home is 6 m long, 8 m wide, and 0.25 m thick, and is made of a flat layer of concrete whose thermal conductivity is k 5 0.8 W/m·K (Fig. 1–27). The temperatures of the inner and the outer surfaces of the roof one night are measured to be 15°C and 4°C, respectively, for a period of 10 hours. Determine (a) **the rate of heat loss** through the roof that night and (b) **the cost of that heat loss** to the home owner if the cost of electricity is $0.08/kWh.

![](assets/2020-09-08-13-14-14.png)
![](assets/2020-09-08-13-12-58.png) -->

### Thermal Diffusivity

Thermal diffusivity represents how fast heat diffuses through a material.

![](assets/2020-09-08-13-27-16.png)

Note that, the thermal conductivity represents how well a material conducts heat and heat capacity Cp represents how much energy the material stores per unit volume. Therefore, the **thermal diffusivity of a material can be viewed as the ratio of the heat conducted through the material to the heat stored per unit volume.**

## Convection

Energy transfer between a solid surface and surface; uses the effects of conduction and fluid motion. **Faster** fluid motion generally leads to more convective heat transfer.

**Without** fluid motion, convection does not occur, rather heat exchange is carried out by pure conduction.

### Types of Convection

- Forced
  - Fluids is forced to flow over a surface, i.e. with a fan.
- Natural
  - Fluid motion via natural buoyancy forces by fluid density differences
- Change of Phase
  - Heat transfer processes that involve change of phase of a fluid are also considered to be convection because of the fluid motion induced during the process, such as the rise of the vapor bubbles during boiling or the fall of the liquid droplets during condensation.

### Newtons Law of Cooling

![](assets/2020-09-08-13-43-00.png)

Variables:
- h - Convection heat transfer coefficient (W/m2 * °C)
  - Depends on surface geometry, fluid motion nature, fluid properties, fluid velocity
- As - Surface area
- Ts - Surface temperature
- T∞ - Fluid temperature

![](assets/2020-09-08-13-45-52.png)

## Radiation

Heat transfer via energy being emitted as EM waves.

### Stefan-Boltzmann Law

Describes the maximum rate of energy lost through radiation

![](assets/2020-09-08-13-53-09.png)

Variables:
- Q - Max energy lost
- σ - Stefan–Boltzmann constant (5.670 x 10^-28)

For practical applications, ε is the emissivity coefficient between 0 & 1 dependent on surface and temperature.

![](assets/2020-09-08-13-56-07.png)

![](assets/2020-09-08-13-57-20.png)

### Absorptivity (α)

Determines how much a surface absorbs radiation vs reflects/diffuses it; between 0 and 1. An ideal blackbody surface will have α=1, while a perfect mirror will have α=0

### Complete Enclosure

![](assets/2020-09-08-14-03-23.png)

When a surface is completely enclosed by a much larger (or black) surface at temperature Tsurr separated by a gas (such as air) that does not intervene with radiation, the net rate of radiation heat transfer between these two surfaces is given by:

![](assets/2020-09-08-14-02-26.png)

## Combined Heat Transfer

Radiation is usually significant relative to conduction or natural convection, but negligible relative to forced convection.

When radiation and convection occur simultaneously
between a surface and a gas, combined heat transfer coefficient h<sub>combined</sub> includes the effects of both convection and radiation.

![](assets/2020-09-08-14-05-05.png)