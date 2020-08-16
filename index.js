const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter;

const width = 800; //how big we want the world to be in px
const height = 600;

const engine = Engine.create(); // creates an engine which includes a world
const {world} = engine; // destructure the world from the engine
const render = Render.create({
    element: document.body, //where we want to show the drawing
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);


//Add drag and drop capabilities to the world
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

//Walls - first two numbers are center position of shape
// numbers three and four are width then height
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true}),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true}),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true}),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true}),
];
World.add(world, walls);

//random shapes
for (let i = 0; i < 40; i++) {
    if (Math.random() > 0.5){
        World.add(world, 
            Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    } else {
        World.add(world,
            Bodies.circle(Math.random() * width, Math.random() * height, 35))
    }
    
}

