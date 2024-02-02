// // __tests__/useIsAuthenticated.test.ts
// import AuthStore from '@/app/store/AuthStore';
// import { renderHook } from '@testing-library/react';
// import useIsAuthenticated from './useAuthValidation';

// // Adicione a declaração de tipo para a função redirect
// declare global {
//   var redirect: (url: string) => void;
// }

// describe('useIsAuthenticated', () => {
//   // Configurando o redirect para o teste
//   global.redirect = jest.fn();

//   it('should redirect to login when isAuthenticated is false', () => {
//     // Configurando o AuthStore para retornar isAuthenticated como false
//     jest.spyOn(AuthStore.prototype, 'isAuthenticated', 'get').mockReturnValue(false);

//     // Renderizando o hook
//     const { result, rerender } = renderHook(() => useIsAuthenticated());

//     // Verificando se o redirecionamento ocorreu
//     expect(result.current.isAuthCheckComplete).toBe(false);
//     expect(global.redirect).toHaveBeenCalledWith('/login');

//     // Restaurando o comportamento original do AuthStore
//     jest.restoreAllMocks();

//     // Rerenderizando para disparar o efeito novamente
//     rerender();

//     // Verificando se o estado foi atualizado
//     expect(result.current.isAuthCheckComplete).toBe(true);
//   });

//   it('should return true when isAuthenticated is true', () => {
//     // Configurando o AuthStore para retornar isAuthenticated como true
//     jest.spyOn(AuthStore.prototype, 'isAuthenticated', 'get').mockReturnValue(true);

//     // Renderizando o hook
//     const { result } = renderHook(() => useIsAuthenticated());

//     // Verificando se o estado é true
//     expect(result.current.isAuthCheckComplete).toBe(true);

//     // Restaurando o comportamento original do AuthStore
//     jest.restoreAllMocks();
//   });
// });
