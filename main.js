!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_inactive",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},t=(e,t,o)=>{e.querySelector(`#${t.id}-error`).textContent="",t.classList.remove(o.inputErrorClass)},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?((e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)})(t,o):(t.disabled=!1,t.classList.remove(o.inactiveButtonClass))},n=document.querySelectorAll("#modal-close-btn"),r=document.querySelector(".profile__edit-btn"),a=document.querySelector(".profile__name"),l=document.querySelector(".profile__description"),c=document.querySelector(".profile__add-btn"),s=document.querySelector("#edit-modal"),i=s.querySelector("#edit-profile-form"),d=s.querySelector("#profile-name-input"),u=s.querySelector("#profile-description-input"),m=document.querySelector("#add-card-modal"),p=m.querySelector("#add-card-form"),f=m.querySelector(".modal__submit-btn"),y=m.querySelector("#add-card-link-input"),v=m.querySelector("#add-card-caption-input"),_=document.querySelector("#card-template").content,g=document.querySelector(".cards__list"),h=document.querySelector("#preview-modal"),S=document.querySelector(".modal__image"),b=document.querySelector(".modal__caption");function q(e){e.target===e.currentTarget&&E(e.currentTarget)}function w(e){"Escape"===e.key&&E(document.querySelector(".modal_opened"))}function k(e){e.classList.add("modal_opened"),document.addEventListener("keydown",w),e.addEventListener("mousedown",q)}function E(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",w),e.removeEventListener("mousedown",q)}function L(e){const t=_.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image"),r=t.querySelector(".card__like-btn"),a=t.querySelector(".card__bin-btn");return n.src=e.link,n.alt=e.alt,o.textContent=e.name,r.addEventListener("click",(()=>{r.classList.toggle("card__like-btn_liked")})),a.addEventListener("click",(()=>{t.remove("disabled")})),n.addEventListener("click",(()=>{k(h),S.src=e.link,S.alt=e.alt,b.textContent=e.name})),t}var x;n.forEach((e=>{const t=e.closest(".modal");e.addEventListener("click",(()=>E(t)))})),r.addEventListener("click",(()=>{var o,n;d.value=a.textContent,u.value=l.textContent,o=i,n=e,[d,u].forEach((e=>{t(o,e,n)})),k(s)})),i.addEventListener("submit",(function(e){e.preventDefault(),a.textContent=d.value,l.textContent=u.value,E(s)})),c.addEventListener("click",(()=>{k(m)})),[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",alt:"Val Thorens"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",alt:"Restaurant terrace"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",alt:"An outdoor cafe"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",alt:"A very long bridge, over the forest and through the trees"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",alt:"Tunnel with morning light"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",alt:"Mountain house"},{name:"Golden Gate Bridge",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",alt:"Golden Gate Bridge"}].forEach((e=>{!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend";const o=L(e);g[t](o)}(e)})),p.addEventListener("submit",(function(t){t.preventDefault();const o=L({name:v.value,link:y.value});g.prepend(o),p.reset(),disableButton(f,e),E(m)})),x=e,document.querySelectorAll(x.formSelector).forEach((e=>{((e,n)=>{const r=Array.from(e.querySelectorAll(n.inputSelector)),a=e.querySelector(n.submitButtonSelector);console.log(r),console.log(a),o(r,a,n),r.forEach((l=>{l.addEventListener("input",(function(){((e,o,n)=>{o.validity.valid?t(e,o,n):((e,t,o,n)=>{const r=e.querySelector(`#${t.id}-error`);t.classList.add(n.inputErrorClass),r.textContent=o})(e,o,o.validationMessage,n)})(e,l,n),o(r,a,n)}))}))})(e,x)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQU8sTUFBTUEsRUFBVyxDQUN0QkMsYUFBYyxlQUNkQyxjQUFlLGdCQUNmQyxxQkFBc0IscUJBQ3RCQyxvQkFBcUIsNkJBQ3JCQyxnQkFBaUIsMEJBQ2pCQyxXQUFZLGdCQVNSQyxFQUFpQkEsQ0FBQ0MsRUFBYUMsRUFBY0MsS0FDNUJGLEVBQVlHLGNBQWMsSUFBSUYsRUFBYUcsWUFDbkRDLFlBQWMsR0FDM0JKLEVBQWFLLFVBQVVDLE9BQU9MLEVBQU9MLGdCQUFnQixFQTJCakRXLEVBQW9CQSxDQUFDQyxFQUFXQyxFQUFlUixLQVg1Qk8sSUFDaEJBLEVBQVVFLE1BQU1WLElBQ2JBLEVBQWFXLFNBQVNDLFFBVTVCQyxDQUFnQkwsR0FOQU0sRUFBQ0wsRUFBZVIsS0FDcENRLEVBQWNNLFVBQVcsRUFDekJOLEVBQWNKLFVBQVVXLElBQUlmLEVBQU9OLG9CQUFvQixFQUtyRG1CLENBQWNMLEVBQWVSLElBRTdCUSxFQUFjTSxVQUFXLEVBQ3pCTixFQUFjSixVQUFVQyxPQUFPTCxFQUFPTixxQkFDeEMsRUNDSXNCLEVBQWVDLFNBQVNDLGlCQUFpQixvQkFHekNDLEVBQW9CRixTQUFTaEIsY0FBYyxzQkFDM0NtQixFQUFjSCxTQUFTaEIsY0FBYyxrQkFDckNvQixFQUFxQkosU0FBU2hCLGNBQWMseUJBQzVDcUIsRUFBa0JMLFNBQVNoQixjQUFjLHFCQUd6Q3NCLEVBQW1CTixTQUFTaEIsY0FBYyxlQUMxQ3VCLEVBQWtCRCxFQUFpQnRCLGNBQWMsc0JBQ2pEd0IsRUFBWUYsRUFBaUJ0QixjQUFjLHVCQUMzQ3lCLEVBQW1CSCxFQUFpQnRCLGNBQ3hDLDhCQUVJMEIsRUFBWVYsU0FBU2hCLGNBQWMsbUJBQ25DMkIsRUFBZ0JELEVBQVUxQixjQUFjLGtCQUN4QzRCLEVBQW1CRixFQUFVMUIsY0FBYyxzQkFDM0M2QixFQUFhSCxFQUFVMUIsY0FBYyx3QkFDckM4QixFQUFhSixFQUFVMUIsY0FBYywyQkFHckMrQixFQUFlZixTQUFTaEIsY0FBYyxrQkFBa0JnQyxRQUN4REMsRUFBWWpCLFNBQVNoQixjQUFjLGdCQUVuQ2tDLEVBQWVsQixTQUFTaEIsY0FBYyxrQkFDdENtQyxFQUEyQm5CLFNBQVNoQixjQUFjLGlCQUNsRG9DLEVBQTZCcEIsU0FBU2hCLGNBQWMsbUJBRzFELFNBQVNxQyxFQUFrQkMsR0FDckJBLEVBQUlDLFNBQVdELEVBQUlFLGVBQ3JCQyxFQUFXSCxFQUFJRSxjQUVuQixDQUVBLFNBQVNFLEVBQWNKLEdBQ0wsV0FBWkEsRUFBSUssS0FFTkYsRUFEb0J6QixTQUFTaEIsY0FBYyxpQkFHL0MsQ0FFQSxTQUFTNEMsRUFBVUMsR0FDakJBLEVBQU0xQyxVQUFVVyxJQUFJLGdCQUNwQkUsU0FBUzhCLGlCQUFpQixVQUFXSixHQUNyQ0csRUFBTUMsaUJBQWlCLFlBQWFULEVBQ3RDLENBRUEsU0FBU0ksRUFBV0ksR0FDbEJBLEVBQU0xQyxVQUFVQyxPQUFPLGdCQUN2QlksU0FBUytCLG9CQUFvQixVQUFXTCxHQUN4Q0csRUFBTUUsb0JBQW9CLFlBQWFWLEVBQ3pDLENBT0EsU0FBU1csRUFBZUMsR0FDdEIsTUFBTUMsRUFBY25CLEVBQWEvQixjQUFjLFNBQVNtRCxXQUFVLEdBQzVEQyxFQUFrQkYsRUFBWWxELGNBQWMsZ0JBQzVDcUQsRUFBbUJILEVBQVlsRCxjQUFjLGdCQUM3Q3NELEVBQWlCSixFQUFZbEQsY0FBYyxtQkFDM0N1RCxFQUFnQkwsRUFBWWxELGNBQWMsa0JBcUJoRCxPQW5CQXFELEVBQWlCRyxJQUFNUCxFQUFLUSxLQUM1QkosRUFBaUJLLElBQU1ULEVBQUtTLElBQzVCTixFQUFnQmxELFlBQWMrQyxFQUFLVSxLQUVuQ0wsRUFBZVIsaUJBQWlCLFNBQVMsS0FDdkNRLEVBQWVuRCxVQUFVeUQsT0FBTyx1QkFBdUIsSUFHekRMLEVBQWNULGlCQUFpQixTQUFTLEtBQ3RDSSxFQUFZOUMsT0FBTyxXQUFXLElBR2hDaUQsRUFBaUJQLGlCQUFpQixTQUFTLEtBQ3pDRixFQUFVVixHQUNWQyxFQUF5QnFCLElBQU1QLEVBQUtRLEtBQ3BDdEIsRUFBeUJ1QixJQUFNVCxFQUFLUyxJQUNwQ3RCLEVBQTJCbEMsWUFBYytDLEVBQUtVLElBQUksSUFHN0NULENBQ1QsQ0Q1RGlDbkQsTUNxRmpDZ0IsRUFBYThDLFNBQVNDLElBQ3BCLE1BQU1qQixFQUFRaUIsRUFBT0MsUUFBUSxVQUM3QkQsRUFBT2hCLGlCQUFpQixTQUFTLElBQU1MLEVBQVdJLElBQU8sSUFHM0QzQixFQUFrQjRCLGlCQUFpQixTQUFTLEtEbkhia0IsSUFBQ25FLEVBQXdCRSxFQ29IdER5QixFQUFVeUMsTUFBUTlDLEVBQVlqQixZQUM5QnVCLEVBQWlCd0MsTUFBUTdDLEVBQW1CbEIsWURySGRMLEVDc0hkMEIsRUR0SHNDeEIsRUNzSFVWLEVBQS9CLENBQUNtQyxFQUFXQyxHRHJIbkNvQyxTQUFTSyxJQUNqQnRFLEVBQWVDLEVBQWFxRSxFQUFPbkUsRUFBTyxJQ3FINUM2QyxFQUFVdEIsRUFBaUIsSUFHN0JDLEVBQWdCdUIsaUJBQWlCLFVBbENqQyxTQUFpQ1IsR0FDL0JBLEVBQUk2QixpQkFFSmhELEVBQVlqQixZQUFjc0IsRUFBVXlDLE1BQ3BDN0MsRUFBbUJsQixZQUFjdUIsRUFBaUJ3QyxNQUVsRHhCLEVBQVduQixFQUNiLElBNkJBRCxFQUFnQnlCLGlCQUFpQixTQUFTLEtBQ3hDRixFQUFVbEIsRUFBVSxJQTVLRCxDQUNuQixDQUNFaUMsS0FBTSxjQUNORixLQUFNLDBIQUNOQyxJQUFLLGVBRVAsQ0FDRUMsS0FBTSxxQkFDTkYsS0FBTSxrSEFDTkMsSUFBSyxzQkFFUCxDQUNFQyxLQUFNLGtCQUNORixLQUFNLHdIQUNOQyxJQUFLLG1CQUVQLENBQ0VDLEtBQU0sNERBQ05GLEtBQU0sMEhBQ05DLElBQUssNkRBRVAsQ0FDRUMsS0FBTSw0QkFDTkYsS0FBTSx5SEFDTkMsSUFBSyw2QkFFUCxDQUNFQyxLQUFNLGlCQUNORixLQUFNLDBIQUNOQyxJQUFLLGtCQUVQLENBQ0VDLEtBQU0scUJBQ05GLEtBQU0sNkhBQ05DLElBQUssdUJBNklJRyxTQUFTTyxLQTNFdEIsU0FBb0JBLEdBQTBCLElBQXBCQyxFQUFNQyxVQUFBQyxPQUFBLFFBQUFDLElBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFHLFVBQ2pDLE1BQU1wQixFQUFjRixFQUFlb0IsR0FDbkNuQyxFQUFVb0MsR0FBUW5CLEVBQ3BCLENBeUVFdUIsQ0FBV0wsRUFBSyxJQUdsQnpDLEVBQWNtQixpQkFBaUIsVUFuQy9CLFNBQTZCUixHQUMzQkEsRUFBSTZCLGlCQUVKLE1BQ01qQixFQUFjRixFQURBLENBQUVXLEtBQU03QixFQUFXbUMsTUFBT1IsS0FBTTVCLEVBQVdvQyxRQUUvRGhDLEVBQVV5QyxRQUFReEIsR0FFbEJ2QixFQUFjZ0QsUUFDZC9ELGNBQWNnQixFQUFrQnZDLEdBQ2hDb0QsRUFBV2YsRUFDYixJRGxGaUMzQixFQ2lIaEJWLEVEaEhFMkIsU0FBU0MsaUJBQWlCbEIsRUFBT1QsY0FDekN1RSxTQUFTaEUsSUFyQk0rRSxFQUFDL0UsRUFBYUUsS0FDdEMsTUFBTU8sRUFBWXVFLE1BQU1DLEtBQ3RCakYsRUFBWW9CLGlCQUFpQmxCLEVBQU9SLGdCQUVoQ2dCLEVBQWdCVixFQUFZRyxjQUFjRCxFQUFPUCxzQkFFdkR1RixRQUFRQyxJQUFJMUUsR0FDWnlFLFFBQVFDLElBQUl6RSxHQUVaRixFQUFrQkMsRUFBV0MsRUFBZVIsR0FFNUNPLEVBQVV1RCxTQUFTL0QsSUFDakJBLEVBQWFnRCxpQkFBaUIsU0FBUyxXQW5EaEJtQyxFQUFDcEYsRUFBYUMsRUFBY0MsS0FDaERELEVBQWFXLFNBQVNDLE1BUXpCZCxFQUFlQyxFQUFhQyxFQUFjQyxHQXJCdkJtRixFQUFDckYsRUFBYUMsRUFBY3FGLEVBQWNwRixLQUMvRCxNQUFNcUYsRUFBZXZGLEVBQVlHLGNBQWMsSUFBSUYsRUFBYUcsWUFDaEVILEVBQWFLLFVBQVVXLElBQUlmLEVBQU9MLGlCQUNsQzBGLEVBQWFsRixZQUFjaUYsQ0FBWSxFQVdyQ0QsQ0FDRXJGLEVBQ0FDLEVBQ0FBLEVBQWF1RixrQkFDYnRGLEVBSUosRUEwQ0lrRixDQUFtQnBGLEVBQWFDLEVBQWNDLEdBQzlDTSxFQUFrQkMsRUFBV0MsRUFBZVIsRUFDOUMsR0FBRSxHQUNGLEVBTUE2RSxDQUFrQi9FLEVBQWFFLEVBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3N1Ym1pdC1idG5cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc3VibWl0LWJ0bl9pbmFjdGl2ZVwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dJbnB1dEVycm9yKFxuICAgICAgZm9ybUVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGlmIChoYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWxlbWVudCwgaW5wdXRMaXN0LCBjb25maWcpID0+IHtcbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0LCBjb25maWcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGZvcm1FbGVtZW50LCBjb25maWcpID0+IHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5pbnB1dFNlbGVjdG9yKVxuICApO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gIGNvbnNvbGUubG9nKGlucHV0TGlzdCk7XG4gIGNvbnNvbGUubG9nKGJ1dHRvbkVsZW1lbnQpO1xuXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcblxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50LCBjb25maWcpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHtcbiAgZW5hYmxlVmFsaWRhdGlvbixcbiAgc2V0dGluZ3MsXG4gIHJlc2V0VmFsaWRhdGlvbixcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbCBUaG9yZW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzEtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICAgIGFsdDogXCJWYWwgVGhvcmVuc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZXN0YXVyYW50IHRlcnJhY2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICAgIGFsdDogXCJSZXN0YXVyYW50IHRlcnJhY2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW4gb3V0ZG9vciBjYWZlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzMtcGhvdG8tYnktdHViYW51ci1kb2dhbi1mcm9tLXBleGVscy5qcGdcIixcbiAgICBhbHQ6IFwiQW4gb3V0ZG9vciBjYWZlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy80LXBob3RvLWJ5LW1hdXJpY2UtbGFzY2hldC1mcm9tLXBleGVscy5qcGdcIixcbiAgICBhbHQ6IFwiQSB2ZXJ5IGxvbmcgYnJpZGdlLCBvdmVyIHRoZSBmb3Jlc3QgYW5kIHRocm91Z2ggdGhlIHRyZWVzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcbiAgICBhbHQ6IFwiVHVubmVsIHdpdGggbW9ybmluZyBsaWdodFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb3VudGFpbiBob3VzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgICBhbHQ6IFwiTW91bnRhaW4gaG91c2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR29sZGVuIEdhdGUgQnJpZGdlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzctcGhvdG8tYnktZ3JpZmZpbi13b29sZHJpZGdlLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICAgIGFsdDogXCJHb2xkZW4gR2F0ZSBCcmlkZ2VcIixcbiAgfSxcbl07XG5cbi8vIEltYWdlIGVsZW1lbnRzXG4vLyBjb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWxvZ29cIik7XG4vLyBsb2dvSW1hZ2Uuc3JjID0gbG9nb1NyYztcbi8vIGNvbnN0IGF2YXRhckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS1hdmF0YXJcIik7XG4vLyBhdmF0YXJJbWFnZS5zcmMgPSBhdmF0YXJTcmM7XG5cbi8vIFVuaXZlcnNhbCBlbGVtZW50c1xuY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2RhbC1jbG9zZS1idG5cIik7XG5cbi8vIFByb2ZpbGUgZWxlbWVudHNcbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ0blwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcbmNvbnN0IGNhcmRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ0blwiKTtcblxuLy8gRm9ybSBlbGVtZW50c1xuY29uc3QgZWRpdFByb2ZpbGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1tb2RhbFwiKTtcbmNvbnN0IGVkaXRQcm9maWxlRm9ybSA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtZm9ybVwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5jb25zdCBjYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW1vZGFsXCIpO1xuY29uc3QgY2FyZE1vZGFsRm9ybSA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWZvcm1cIik7XG5jb25zdCBjYXJkU3VibWl0QnV0dG9uID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3N1Ym1pdC1idG5cIik7XG5jb25zdCBpbWFnZUlucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbGluay1pbnB1dFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1jYXB0aW9uLWlucHV0XCIpO1xuXG4vLyBDYXJkLXJlbGF0ZWQgZWxlbWVudHNcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50O1xuY29uc3QgY2FyZHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcblxuY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3LW1vZGFsXCIpO1xuY29uc3QgcHJldmlld01vZGFsSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XG5cbi8vIEZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xvc2VNb2RhbE92ZXJsYXkoZXZ0KSB7XG4gIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xuICAgIGNsb3NlTW9kYWwoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWxFc2MoZXZ0KSB7XG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY29uc3QgbW9kYWxPcGVuZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKTtcbiAgICBjbG9zZU1vZGFsKG1vZGFsT3BlbmVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzYyk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xvc2VNb2RhbE92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxFc2MpO1xuICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsb3NlTW9kYWxPdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChpdGVtLCBtZXRob2QgPSBcInByZXBlbmRcIikge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGl0ZW0pO1xuICBjYXJkc0xpc3RbbWV0aG9kXShjYXJkRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgY2FyZE5hbWVFbGVtZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgY29uc3QgY2FyZEltYWdlRWxlbWVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ0blwiKTtcbiAgY29uc3QgY2FyZEJpbkJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYmluLWJ0blwiKTtcblxuICBjYXJkSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgY2FyZEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLmFsdDtcbiAgY2FyZE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuXG4gIGNhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnRuX2xpa2VkXCIpO1xuICB9KTtcblxuICBjYXJkQmluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FyZEVsZW1lbnQucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH0pO1xuXG4gIGNhcmRJbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuTW9kYWwocHJldmlld01vZGFsKTtcbiAgICBwcmV2aWV3TW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLmFsdDtcbiAgICBwcmV2aWV3TW9kYWxDYXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuXG4vLyBFdmVudCBoYW5kbGVyc1xuZnVuY3Rpb24gaGFuZGxlRWRpdFByb2ZpbGVTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZUlucHV0LnZhbHVlO1xuICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuXG4gIGNsb3NlTW9kYWwoZWRpdFByb2ZpbGVNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVzID0geyBuYW1lOiB0aXRsZUlucHV0LnZhbHVlLCBsaW5rOiBpbWFnZUlucHV0LnZhbHVlIH07XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoaW5wdXRWYWx1ZXMpO1xuICBjYXJkc0xpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG5cbiAgY2FyZE1vZGFsRm9ybS5yZXNldCgpO1xuICBkaXNhYmxlQnV0dG9uKGNhcmRTdWJtaXRCdXR0b24sIHNldHRpbmdzKTtcbiAgY2xvc2VNb2RhbChjYXJkTW9kYWwpO1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbmNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdChcIi5tb2RhbFwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG59KTtcblxuZWRpdFByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gIHJlc2V0VmFsaWRhdGlvbihlZGl0UHJvZmlsZUZvcm0sIFtuYW1lSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXRdLCBzZXR0aW5ncyk7XG4gIG9wZW5Nb2RhbChlZGl0UHJvZmlsZU1vZGFsKTtcbn0pO1xuXG5lZGl0UHJvZmlsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0UHJvZmlsZVN1Ym1pdCk7XG5cbmNhcmRNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoY2FyZE1vZGFsKTtcbn0pO1xuXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICByZW5kZXJDYXJkKGl0ZW0pO1xufSk7XG5cbmNhcmRNb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBZGRDYXJkU3VibWl0KTtcblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiY29uZmlnIiwicXVlcnlTZWxlY3RvciIsImlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImNsb3NlQnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVkaXRQcm9maWxlQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJjYXJkTW9kYWxCdXR0b24iLCJlZGl0UHJvZmlsZU1vZGFsIiwiZWRpdFByb2ZpbGVGb3JtIiwibmFtZUlucHV0IiwiZGVzY3JpcHRpb25JbnB1dCIsImNhcmRNb2RhbCIsImNhcmRNb2RhbEZvcm0iLCJjYXJkU3VibWl0QnV0dG9uIiwiaW1hZ2VJbnB1dCIsInRpdGxlSW5wdXQiLCJjYXJkVGVtcGxhdGUiLCJjb250ZW50IiwiY2FyZHNMaXN0IiwicHJldmlld01vZGFsIiwicHJldmlld01vZGFsSW1hZ2VFbGVtZW50IiwicHJldmlld01vZGFsQ2FwdGlvbkVsZW1lbnQiLCJjbG9zZU1vZGFsT3ZlcmxheSIsImV2dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZU1vZGFsIiwiY2xvc2VNb2RhbEVzYyIsImtleSIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRDYXJkRWxlbWVudCIsImRhdGEiLCJjYXJkRWxlbWVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWxlbWVudCIsImNhcmRJbWFnZUVsZW1lbnQiLCJjYXJkTGlrZUJ1dHRvbiIsImNhcmRCaW5CdXR0b24iLCJzcmMiLCJsaW5rIiwiYWx0IiwibmFtZSIsInRvZ2dsZSIsImZvckVhY2giLCJidXR0b24iLCJjbG9zZXN0IiwicmVzZXRWYWxpZGF0aW9uIiwidmFsdWUiLCJpbnB1dCIsInByZXZlbnREZWZhdWx0IiwiaXRlbSIsIm1ldGhvZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJlbmRlckNhcmQiLCJwcmVwZW5kIiwicmVzZXQiLCJzZXRFdmVudExpc3RlbmVycyIsIkFycmF5IiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==