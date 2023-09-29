# svelte-team-picker

## Getting started

- The create svelte tool is pretty good. Nicely walks you through the process
- The app itself is super quick to start. To be expected with vite!

## Azure

- Because I may the repo against my github account rather than RES group, I can grant devops access. This avoids the need for SSH.
- Not being able to do role assignments is mildly annoying. It means I can't use managed identity to give my web app access to my storage account, forcing me to use connection strings. Surely this is worse?
- Seem to have lost app registration permissions?!

## Svelte initial thoughts

- Using 'let' for local state feels weird after react, but does feel more natural. Would certainly reduce the learning curve for new devs.
- Reactive declarations feel like a recipe for a bug. I guess $ is equivalent to the useEffect hook?
- Similarly to react, you can't mutate objects and arrays and expect them to be picked up.
- Typescript support is a tad clunky inside components
- :each is the wrong way round. Why?!
- Svelte encourages things like using inline handlers because the compiler will cope. Not sure whether this would just encourage laziness though?
- event modifiers are pretty neat.
- Custom events are pretty wild. Maybe in a good way? It feels better than passing a function through as a prop, but also feels like a recipe for bugs.
- Event forwarding is also quite neat.
- input binding also very cool.
- Subscribing to stores is a bit meh. Feels a bit like mobx, but not as organic.
- Using the $ syntax is a lot nicer
- Custom state is very nice. Plays well with typescript and gives a very clean separation between UI and state.
- Being able to bind to state is also pretty cool. Definitely removes a lot of boilerplate

## Deep dive into the code

- Testing state directly is very clunky. There doesn't seem to be a nice way of giving an initial state. Maybe I'm going about this the wrong way?
- Testing state indirectly seems to be borderline impossible. Might be workable by mocking it, but it's not nice.
