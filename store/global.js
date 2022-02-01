export const state = () => ({
    navbar: 'bg-light'
})
  
export const mutations = {
    makeNavDark(state) {
        state.navbar = 'bg-dark';
    },
    makeNavLight(state) {
        state.navbar = '';
    }
}