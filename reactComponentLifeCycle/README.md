Understanding react component life cycle:
-----------------------------------------

* When we create a react component it goes through several phases called as life cycle phases 

Life cycle phases in a CLASS COMPONENT:
---------------------------------------

1. Mounting Phase- It beings when a component is first created and inserted into the DOM. 
We have four methods during this phase:
A. Constructor
B. a static method getDerivedStateFromProps()
C. render() 
D. ComponentDidMount()

2. Updating Phase - It occurs when a component's props or state change
During this phase, we have five methods:
A. a static method getDerivedStateFromProps()
B. shouldComponentUpdate()
C. render()
D. getSnapshotBeforeUpdate()
E. componentDidUpdate()

3. Unmounting Phase - It occurs when a component is removed from the DOM
During unmounting we just have one method:
A. componentWillUnmount()

4. Error Handling Phase - Error handling methods are called when there is an error during rendering in a lifecycle method or in the constructor of any child component
During error handling we have two methods:
A. a static method getDerivedStateFromError()
B. componentDidCatch()


In a FUNCTIONAL COMPONENT:
--------------------------
We use the useEffect() hook