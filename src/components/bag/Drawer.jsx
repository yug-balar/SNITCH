
import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    removeFromCart,
} from "./cartSlice";

export function DrawerBag({ isOpen, toggleDrawer }) {
    const cart = useSelector((store) => {
        return store.cart;
    });

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(removeFromCart(id));
    }

    function handleIncrease(id) {
        dispatch(increment(id));
    }

    function handleDecrease(id) {
        dispatch(decrement(id));
    }

    return (
        <>
            <Drawer open={isOpen} onClose={toggleDrawer} position="right">
                <Drawer.Header
                    title="Cart"
                    titleIcon={() => {
                        return <HiShoppingCart className="mr-2 h-5 w-5" />;
                    }}
                />
                <Drawer.Items>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-4 grow-[1] h-[calc(100vh-178px)] overflow-auto">
                            {cart.cartItems.map((cartItem) => {
                                return (
                                    <li className="flex items-center gap-2">
                                        <img
                                            src={cartItem.src}
                                            alt=""
                                            className="h-14 w-14 object-cover rounded-[50%]"
                                        />
                                        <div className="flex flex-col gap-2 grow-[1]">
                                            <div className="flex items-center">
                                                <p className="grow-[1]">{cartItem.title}</p>
                                                <p className="font-medium">
                                                    {cartItem.Discount} X {cartItem.quantity}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    pill
                                                    size="xs"
                                                    className="bg-[#6A6A6A]"
                                                    onClick={() => {
                                                        handleDecrease(cartItem.id);
                                                    }}
                                                >
                                                    <HiMinus />
                                                </Button>
                                                <p>{cartItem.quantity}</p>
                                                <Button
                                                    pill
                                                    size="xs"
                                                    className="bg-[#6A6A6A]"
                                                    onClick={() => {
                                                        handleIncrease(cartItem.id);
                                                    }}
                                                >
                                                    <HiPlus />
                                                </Button>
                                            </div>
                                        </div>

                                        <Button
                                            pill
                                            size="xs"
                                            className="bg-[#6A6A6A]"
                                            onClick={() => {
                                                handleDelete(cartItem.id);
                                            }}
                                        >
                                            <HiTrash />
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </Drawer.Items>
            </Drawer>

        </>
    );
}
