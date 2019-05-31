import { types } from 'mobx-state-tree';

/**
 * Mobx State Tree Store
 * The store recieves 3 parameters
 *  1st one is the Store Name
 *  2nd is an object with the Props and Computed values
 *  3rd is and object with the Actions
 **/

const UserStore = types
  .model('UserStore', {
    email: types.identifier(),
    name: types.string,
    role: types.string,
    startWorkingDay: types.date,
    totalWorking: types.number,
    telNo: types.number,
  })
  // .views(self => ({
  //   get fullName() {
  //     return `${self.name} ${self.lastName}`;
  //   }
  // }))
  // .actions(self => ({
  //   changeName(name) {
  //     self.name = name;
  //   },
  //   changeLastName(lastName) {
  //     self.lastName = lastName;
  //   },
  //   increaseXp(amount) {
  //     self.xp += amount;
  //   },
  //   changeSkill(skill){
  //     self.skill = skill;
  //   },
  //   increaseAge(amount) {
  //     self.age += amount;
  //   },
  // }));

export default UserStore;
