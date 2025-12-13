import { useCart } from "@/lib/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, total } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:w-[540px] flex flex-col p-0 border-l border-border/40">
        <SheetHeader className="p-6 border-b border-border/40 bg-background/50 backdrop-blur-sm">
          <SheetTitle className="font-serif text-2xl font-normal">Shopping Bag ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <p className="mb-4">Your bag is empty.</p>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="flex flex-col gap-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 bg-secondary flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg font-serif">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2 border border-border px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors text-sm underline decoration-muted-foreground/50 hover:decoration-destructive"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-6 border-t border-border/40 bg-secondary/30">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-2xl font-serif">${total.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full h-12 text-lg font-normal rounded-none" size="lg">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
