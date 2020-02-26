// factory method/pattern
//  a way of creating an interface for creating objects 
// let subclasses define which classes to instantiate 
// often used to manage, maintain, and manipulate collections of objects that are different but also have similarities 
// ex membership types; if have paid memberships ->  have same properties and methods

// create a new factory method that takes a member type and creates a new object based on that type 




function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        // check the types that are passed in 
        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = SuperMembership(name);
        }
        member.type = type;


    }
}